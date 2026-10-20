import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterVideos,
  formatAudioDuration,
  parseStructuredThoughtText
} from './videoAndAudioLogic.ts';
import { VIDEO_DATABASE } from '../data/videoData.ts';

test('filterVideos filters by category correctly', () => {
  assert.equal(VIDEO_DATABASE.length >= 7, true);

  const expertVideos = filterVideos(VIDEO_DATABASE, 'Experteninterviews', '');
  assert.equal(expertVideos.length, 3);
  assert.ok(expertVideos.every((v) => v.category === 'Experteninterviews'));

  const illnessVideos = filterVideos(VIDEO_DATABASE, 'Erklärvideos psychische Erkrankungen', '');
  assert.equal(illnessVideos.length, 3);

  const relaxVideos = filterVideos(VIDEO_DATABASE, 'Entspannung & Achtsamkeit', '');
  assert.equal(relaxVideos.length, 3);
});

test('filterVideos searches by keywords in title, speaker and summary', () => {
  const resultKptbs = filterVideos(VIDEO_DATABASE, 'Alle', 'K-PTBS');
  assert.ok(resultKptbs.length >= 1);
  assert.ok(resultKptbs.some((v) => v.title.includes('K-PTBS')));

  const resultSauer = filterVideos(VIDEO_DATABASE, 'Alle', 'Sauer');
  assert.ok(resultSauer.length >= 1);
  assert.equal(resultSauer[0].speaker, 'Dr. med. Christiane Sauer');
});

test('formatAudioDuration formats seconds properly', () => {
  assert.equal(formatAudioDuration(0), '00:00');
  assert.equal(formatAudioDuration(65), '01:05');
  assert.equal(formatAudioDuration(360), '06:00');
});

test('parseStructuredThoughtText handles fallback gracefully', () => {
  const parsed = parseStructuredThoughtText('Ein einfacher Text');
  assert.ok(parsed.emotionalCore.length > 0);
  assert.ok(parsed.identifiedPatterns.length > 0);
  assert.ok(parsed.factsVsEvaluations.factualCore.length > 0);
});
