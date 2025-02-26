import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon, VercelIcon } from './icons';
import { MOLECULE_DEMO } from '@/artifacts/molecule/constants';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <VercelIcon size={32} />
          <span>+</span>
          <MessageIcon size={32} />
        </p>
        <p>
          This is an{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://github.com/vercel/ai-chatbot"
            target="_blank"
          >
            open source
          </Link>{' '}
          chatbot template built with Next.js and the AI SDK by Vercel. It is my
          submission for the Founding Frontend Engineer role at a Stealth
          Startup.
        </p>
        <p>
          Press &#34;Show me the molecule visualizer demo&#34; below—it&#39;ll
          create a<pre>`{`create a ${MOLECULE_DEMO}`}`</pre> prompt, a Molecule
          Visualizer Document will expand, providing information & showing its
          3D structure. Alongside it, a Predicted Toxicity Panel will display
          insights on its potential toxicity.
        </p>
        <p>
          You can learn more about the AI SDK by visiting the{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            docs
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
