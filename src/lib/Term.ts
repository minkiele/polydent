import { GenericTerm } from './GenericTerm';

export class Term extends GenericTerm {
    public constructor(private term: string) {
        super();
    }
    public toString() {
        return this.term;
    }
}
