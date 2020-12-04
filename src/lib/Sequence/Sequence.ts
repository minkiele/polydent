import { GenericTerm } from '../GenericTerm';

export class Sequence extends GenericTerm {

    protected terms: Array<GenericTerm>;

    public constructor(private joinChar: string, ...terms: Array<GenericTerm>) {
        super();
        this.terms = terms;
    }

    public toString(): string {
        return this.terms.join(this.joinChar);
    }

}
