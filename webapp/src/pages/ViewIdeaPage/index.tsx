import { useParams } from 'react-router-dom';

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string };
  return (
    <div>
      <h1>{ideaNick}</h1>
      <p>Description of Idea 1...</p>
      <div>
        <p>Text paragraf 1 of idea 1...</p>
        <p>Text paragraf 2 of idea 1...</p>
        <p>Text paragraf 3 of idea 1...</p>
      </div>
    </div>
  );
};
