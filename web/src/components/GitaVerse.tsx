import React, { useEffect, useState } from 'react';
import { fetchChapters, getTodaysVerseIndex } from '../services/gitaService';

interface Chapter {
  id: number;
  name: string;
  name_transliterated: string;
  name_translated: string;
  chapter_number: number;
  verses_count: number;
  chapter_summary: string;
  chapter_summary_hindi: string;
}

const GitaVerse: React.FC = () => {
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadVerse = async () => {
      setLoading(true);
      try {
        const data = await fetchChapters();
        console.log('Fetched chapters:', data);

        const chapters: Chapter[] = data || []; // <- directly use data as array

        if (chapters.length > 0) {
          const index = getTodaysVerseIndex(chapters.length);
          setChapter(chapters[index]);
        } else {
          console.error('No chapters found');
        }
      } catch (error) {
        console.error('Error fetching chapters:', error);
      } finally {
        setLoading(false);
      }
    };

    loadVerse();
  }, []);

  return (
    <div className="card">
      <h2>Bhagavad Gita Verse of the Day</h2>
      {loading && <p>Loading verse...</p>}
      {!loading && chapter ? (
        <>
          <p>
            <strong>
              Chapter {chapter.chapter_number}: {chapter.name_translated}
            </strong>
          </p>
          <p>
            <em>{chapter.name_transliterated}</em>
          </p>
          <p>{chapter.chapter_summary}</p>
        </>
      ) : (
        !loading && <p>Unable to load verse</p>
      )}
    </div>
  );
};

export default GitaVerse;
