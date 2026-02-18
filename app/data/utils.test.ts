import { test, describe } from 'node:test';
import assert from 'node:assert';
import { getAllApiSlugs, slugify } from './utils.ts';

describe('slugify', () => {
  test('should convert to lowercase', () => {
    assert.strictEqual(slugify('API'), 'api');
  });

  test('should replace special characters with hyphens', () => {
    assert.strictEqual(slugify('API Name!'), 'api-name');
    assert.strictEqual(slugify('API@Name'), 'api-name');
  });

  test('should collapse multiple hyphens', () => {
    assert.strictEqual(slugify('API   Name'), 'api-name');
    assert.strictEqual(slugify('API---Name'), 'api-name');
  });

  test('should remove leading and trailing hyphens', () => {
    assert.strictEqual(slugify('-API Name-'), 'api-name');
  });

  test('should handle alphanumeric characters', () => {
    assert.strictEqual(slugify('API 123'), 'api-123');
  });
});

describe('getAllApiSlugs', () => {
  test('should return an array of objects with slug property', () => {
    const slugs = getAllApiSlugs();
    assert.strictEqual(Array.isArray(slugs), true);
    assert.ok(slugs.length > 0);
    assert.strictEqual(typeof slugs[0].slug, 'string');
  });

  test('all generated slugs from real data should be valid', () => {
    const slugs = getAllApiSlugs();
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

    slugs.forEach(({ slug }) => {
      assert.match(slug, slugRegex, `Slug "${slug}" does not match the expected format`);
    });
  });
});
