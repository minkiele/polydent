import { Term } from './Term';

const NULL_PRODUCTION = '';

export class NullTerm extends Term {
    public constructor() {
        super(NULL_PRODUCTION);
    }
}
