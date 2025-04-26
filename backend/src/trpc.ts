import { initTRPC } from '@trpc/server';
import _ from 'lodash';

const ideas = _.times(100, (i) => ({
  nick: `cool-idea-nick-${i}`,
  name: `Idea ${i}`,
  description: `Descriptions for Idea ${i}...`,
  text: _.times(100, (j) => `<p>Text paragrph ${j} of idea ${i}...</p>`).join(''),
}));
// const ideas = [
//   { nick: 'cool-idea-nick-1', name: 'Idea 1', description: 'Descriptions for Idea 1' },
//   { nick: 'cool-idea-nick-2', name: 'Idea 2', description: 'Descriptions for Idea 2' },
//   { nick: 'cool-idea-nick-3', name: 'Idea 3', description: 'Descriptions for Idea 3' },
//   { nick: 'cool-idea-nick-4', name: 'Idea 4', description: 'Descriptions for Idea 4' },
//   { nick: 'cool-idea-nick-5', name: 'Idea 5', description: 'Descriptions for Idea 5' },
// ];

const trpc = initTRPC.create();
export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas: ideas.map((idea) => _.pick(idea, ['nick', 'name', 'description'])) };
  }),
});

export type TrpcRouter = typeof trpcRouter;
