import { GenericTerm } from '../GenericTerm';

export class WeightedTerm extends GenericTerm {
    public constructor(private term: GenericTerm, private weight = 0) {
        super();
    }

    public getWeight(): number {
        return this.weight;
    }

    public toString(): string {
        return this.term.toString();
    }

}
