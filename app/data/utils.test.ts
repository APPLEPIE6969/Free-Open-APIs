import { generateSlug, searchApis, getApiBySlug } from './utils.ts';
import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('utils', () => {
  describe('generateSlug', () => {
    it('should generate slug from simple text', () => {
      assert.strictEqual(generateSlug('Hello World'), 'hello-world');
    });

    it('should handle special characters', () => {
      assert.strictEqual(generateSlug('API & Test @ 123'), 'api-test-123');
    });

    it('should trim dashes', () => {
      assert.strictEqual(generateSlug('-test-slug-'), 'test-slug');
    });
  });

  describe('searchApis', () => {
    it('should return empty array for empty query', () => {
      assert.deepStrictEqual(searchApis(''), []);
    });

    it('should filter apis by name', () => {
      const results = searchApis('cat');
      // Should find Cat Facts, Cataas, HTTP Cat, etc.
      assert.ok(results.length > 0);
      assert.ok(results.some(api => api.name === 'Cat Facts'));
    });

    it('should filter apis by description', () => {
      // "Daily cat facts" is the description for "Cat Facts"
      const results = searchApis('Daily cat facts');
      assert.ok(results.length > 0);
      assert.ok(results.some(api => api.name === 'Cat Facts'));
    });

    it('should be case insensitive', () => {
      const results = searchApis('CAT');
      assert.ok(results.length > 0);
      assert.ok(results.some(api => api.name === 'Cat Facts'));
    });
  });

  describe('getApiBySlug', () => {
      it('should find an API by its slug', () => {
          const result = getApiBySlug('cat-facts');
          assert.ok(result);
          assert.strictEqual(result?.api.name, 'Cat Facts');
      });

      it('should return null for non-existent slug', () => {
          const result = getApiBySlug('non-existent-api-slug-12345');
          assert.strictEqual(result, null);
      });
  });
});
