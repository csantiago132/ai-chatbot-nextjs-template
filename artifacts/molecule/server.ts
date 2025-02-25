import { smoothStream, streamText } from 'ai';
import { myProvider } from '@/lib/ai/models';
import { createDocumentHandler } from '@/lib/artifacts/server';
import { updateDocumentPrompt } from '@/lib/ai/prompts';
import { ArtifactKind } from '@/lib/enums';

export const moleculeDocumentHandler =
  createDocumentHandler<ArtifactKind.MOLECULE>({
    kind: ArtifactKind.MOLECULE,
    onCreateDocument: async ({ title, dataStream }) => {
      let draftContent = '';

      const { fullStream } = streamText({
        model: myProvider.languageModel('artifact-model'),
        system:
          'Write about the given topic. Use headings wherever appropriate.',
        experimental_transform: smoothStream({ chunking: 'word' }),
        prompt: title,
      });

      for await (const delta of fullStream) {
        const { type } = delta;

        if (type === 'text-delta') {
          const { textDelta } = delta;

          draftContent += textDelta;

          dataStream.writeData({
            type: 'text-delta',
            content: textDelta,
          });
        }
      }

      return draftContent;
    },
    onUpdateDocument: async ({ document, description, dataStream }) => {
      let draftContent = '';

      const { fullStream } = streamText({
        model: myProvider.languageModel('artifact-model'),
        system: updateDocumentPrompt(document.content, ArtifactKind.MOLECULE),
        experimental_transform: smoothStream({ chunking: 'word' }),
        prompt: description,
        experimental_providerMetadata: {
          openai: {
            prediction: {
              type: 'content',
              content: document.content,
            },
          },
        },
      });

      for await (const delta of fullStream) {
        const { type } = delta;

        if (type === 'text-delta') {
          const { textDelta } = delta;

          draftContent += textDelta;
          dataStream.writeData({
            type: 'text-delta',
            content: textDelta,
          });
        }
      }

      return draftContent;
    },
  });
