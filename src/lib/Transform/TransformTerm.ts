import { GenericTerm } from '../GenericTerm';

export abstract class TransformTerm<T extends GenericTerm = GenericTerm> extends GenericTerm {

    public constructor(protected term: GenericTerm) {
        super();
    }

    protected abstract transform(): T;

    public toString(): string {
        return this.transform().toString();
    }
}
