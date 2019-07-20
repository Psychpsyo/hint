// autogenerated by scripts/create/create-hints.js
import { HintContext } from 'hint/dist/src/lib/hint-context';
import { IHint } from 'hint/dist/src/lib/types';
import { register } from './util/axe';

import meta from './meta/semantics';

export default class AxeHint implements IHint {
    public static readonly meta = meta;
    public constructor(context: HintContext) {
        register(context, ['heading-order', 'landmark-banner-is-top-level', 'landmark-complementary-is-top-level', 'landmark-contentinfo-is-top-level', 'landmark-main-is-top-level', 'landmark-no-duplicate-banner', 'landmark-no-duplicate-contentinfo', 'landmark-one-main', 'landmark-unique', 'layout-table', 'p-as-heading', 'page-has-heading-one'], ['heading-order', 'landmark-banner-is-top-level', 'landmark-complementary-is-top-level', 'landmark-contentinfo-is-top-level', 'landmark-main-is-top-level', 'landmark-no-duplicate-banner', 'landmark-no-duplicate-contentinfo', 'landmark-one-main', 'landmark-unique', 'p-as-heading', 'page-has-heading-one']);
    }
}