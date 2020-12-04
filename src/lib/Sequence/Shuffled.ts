import { Random } from '../Random';
import { Sequence } from './Sequence';

export class Shuffled extends Sequence {

    private shuffle() {
        this.terms.sort(Random.getSortRange);
    }

    public toString(): string {
        this.shuffle();
        return super.toString();
    }

}
