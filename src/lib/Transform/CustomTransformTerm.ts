import { GenericTerm } from '../GenericTerm';
import { TransformTerm } from './TransformTerm';

export class CustomTransformTerm<T extends GenericTerm = GenericTerm> extends TransformTerm {
    public constructor(term: GenericTerm, private transformFn: (term: GenericTerm) => T) {
        super(term);
    }

    protected transform(): T {
        const transformFn = this.transformFn;
        return transformFn(this.term);
    }

    public toString(): string {
        return this.transform().toString();
    }
}
