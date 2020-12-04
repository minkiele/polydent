export namespace Random {
    export function getUpTo(upTo: number): number {
        return Math.random() * upTo;
    }
    export function getIntRange(minIncluded: number, maxExcluded: number) {
        return Math.floor(Math.random() * (maxExcluded - minIncluded)) + minIncluded;
    }
    export function getSortRange() {
        return getIntRange(-1, 2);
    }
}
