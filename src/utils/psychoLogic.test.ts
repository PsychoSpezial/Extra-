import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateRelationshipSafetyScore,
  searchKnowledgeBase,
  generateAnonymousPseudonym,
  filterCommunityPosts,
  type CommunityPost
} from './psychoLogic.ts';
import { CHAPTERS_DATA } from '../data/knowledgeBase.ts';

test('calculateRelationshipSafetyScore returns low risk for zero answers', () => {
  const result = calculateRelationshipSafetyScore({});
  assert.equal(result.riskLevel, 'low');
  assert.equal(result.totalScore, 0);
  assert.equal(result.immediateActionRequired, false);
});

test('calculateRelationshipSafetyScore categorizes scores correctly', () => {
  // Moderate risk (score around 12)
  const moderateAnswers: Record<string, number> = {
    q1: 2, q2: 2, q3: 2, q4: 2, q5: 2, q6: 2
  };
  const modResult = calculateRelationshipSafetyScore(moderateAnswers);
  assert.equal(modResult.riskLevel, 'moderate');
  assert.equal(modResult.totalScore, 12);

  // High risk (score around 24)
  const highAnswers: Record<string, number> = {};
  for (let i = 1; i <= 12; i++) {
    highAnswers[`q${i}`] = 2; // 12 * 2 = 24
  }
  const highResult = calculateRelationshipSafetyScore(highAnswers);
  assert.equal(highResult.riskLevel, 'high');
  assert.equal(highResult.totalScore, 24);

  // Critical risk (max score 36)
  const critAnswers: Record<string, number> = {};
  for (let i = 1; i <= 12; i++) {
    critAnswers[`q${i}`] = 3;
  }
  const critResult = calculateRelationshipSafetyScore(critAnswers);
  assert.equal(critResult.riskLevel, 'critical');
  assert.equal(critResult.totalScore, 36);
  assert.equal(critResult.immediateActionRequired, true);
});

test('searchKnowledgeBase returns correct chapters', () => {
  // All 45 chapters are present
  assert.equal(CHAPTERS_DATA.length, 45);

  // Search by term 'Gaslighting'
  const gaslightingResults = searchKnowledgeBase(CHAPTERS_DATA, 'Gaslighting');
  assert.ok(gaslightingResults.length >= 1);
  assert.ok(gaslightingResults.some((c) => c.title.includes('Gaslighting')));

  // Filter by Part 1
  const part1Results = searchKnowledgeBase(CHAPTERS_DATA, '', 1);
  assert.equal(part1Results.length, 11);

  // Filter by Part 2
  const part2Results = searchKnowledgeBase(CHAPTERS_DATA, '', 2);
  assert.equal(part2Results.length, 16);

  // Filter by Part 3
  const part3Results = searchKnowledgeBase(CHAPTERS_DATA, '', 3);
  assert.equal(part3Results.length, 9);

  // Filter by Part 4
  const part4Results = searchKnowledgeBase(CHAPTERS_DATA, '', 4);
  assert.equal(part4Results.length, 9);
});

test('generateAnonymousPseudonym produces valid formatted string', () => {
  const name = generateAnonymousPseudonym();
  assert.ok(name.includes('#'));
  assert.ok(name.length > 5);
});

test('filterCommunityPosts filters by category and search keyword', () => {
  const mockPosts: CommunityPost[] = [
    {
      id: 'p1',
      category: 'Täterdynamiken',
      title: 'Erste Erkenntnis über verdeckten Narzissmus',
      content: 'Nach 5 Jahren habe ich endlich verstanden was los war...',
      authorPseudonym: 'Stiller Beobachter #101',
      avatarSeed: 'seed1',
      createdAt: '2026-10-18',
      reactions: { understand: 5, notAlone: 3, strength: 2, insightful: 4 },
      replies: [],
      tags: ['Verdeckter Narzissmus', 'Erkenntnis']
    },
    {
      id: 'p2',
      category: 'Körper & Nervensystem',
      title: 'Herzrasen und somatische Symptome',
      content: 'Mein Körper war dauernd im Alarmzustand...',
      authorPseudonym: 'Suchende Seele #202',
      avatarSeed: 'seed2',
      createdAt: '2026-10-19',
      reactions: { understand: 8, notAlone: 6, strength: 5, insightful: 2 },
      replies: [],
      tags: ['Nervensystem', 'Somatik']
    }
  ];

  // Category filter
  const catFiltered = filterCommunityPosts(mockPosts, 'Körper & Nervensystem', '');
  assert.equal(catFiltered.length, 1);
  assert.equal(catFiltered[0].id, 'p2');

  // Search filter
  const searchFiltered = filterCommunityPosts(mockPosts, 'Alle', 'verdeckten');
  assert.equal(searchFiltered.length, 1);
  assert.equal(searchFiltered[0].id, 'p1');
});
