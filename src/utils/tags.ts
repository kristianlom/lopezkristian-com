export function getAllTags(
  items: Array<{ data: { tags?: string[] } }>
): string[] {
  const tagSet = new Set<string>();
  for (const item of items) {
    for (const tag of item.data.tags ?? []) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-');
}
