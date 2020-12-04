import { GenericTerm } from '../GenericTerm';
import { Sequence } from './Sequence';

const CONCAT_CHAR = '';

export class Joined extends Sequence {
    public constructor(...terms: Array<GenericTerm>) {
        super(CONCAT_CHAR, terms);
    }
}
