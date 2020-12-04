import { GenericTerm } from '../GenericTerm';
import { Random } from '../Random';
import { WeightedTerm } from './WeightedTerm';

export class WeightedCollection extends GenericTerm {

    collection: Array<WeightedTerm>;
    private totalWeight: number;
    private upperLimits: Array<number>;

    public constructor(...collection: Array<WeightedTerm>) {
        super();
        if(collection.length === 0) {
            throw new Error('Cannot provide an empty WeightedCollection');
        }
        this.collection = collection;
        this.initWeights();
    }

    private initWeights() {
        this.totalWeight = 0;
        this.upperLimits = [];
        this.collection.forEach(term => {
            this.totalWeight += Math.pow(Math.E, term.getWeight());
            this.upperLimits.push(this.totalWeight);
        });
    }

    public pick(): GenericTerm {

        const randomWeight: number = Random.getUpTo(this.totalWeight);

        let i = 1;
        for(; i < this.upperLimits.length; i += 1) {
            if(this.upperLimits[i] > randomWeight) {
                break;
            }
        }
        return this.collection[i - 1];
    }

    public toString(): string {
        return this.pick().toString();
    }

}
