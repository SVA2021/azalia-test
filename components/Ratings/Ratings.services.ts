export function ratingToStar(rating: number): boolean[] {
    let result: boolean[] = [];
    const positiveRating = rating > 5 ? 5 : Math.round(rating);
    const negativeRating = rating > 5 ? 0 : 5 - positiveRating;

    for (let i = 0; i < positiveRating; i++) {
        result.push(true);
    }
    for (let i = 0; i < negativeRating; i++) {
        result.push(false);
    }

    return result;
}

export function normalizeRatingCount(count: number): string {
    if (count % 100 > 10 && count % 100 < 20) return 'отзывов';
    if (count % 10 >= 5) return 'отзывов';
    if (count % 10 === 1) return 'отзыв';
    if (count % 10 > 1 && count && 10 < 5) return 'отзыва';
    return 'отзывов';
}