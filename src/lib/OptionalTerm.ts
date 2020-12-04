import { GenericTerm } from './GenericTerm';
import { NullTerm } from './NullTerm';
import { WeightedCollection } from './Weighted/WeightedCollection';
import { WeightedTerm } from './Weighted/WeightedTerm';

export class OptionalTerm extends WeightedCollection {
    public constructor(term: GenericTerm) {
        super(new WeightedTerm(term), new WeightedTerm(new NullTerm()));
    }
}
