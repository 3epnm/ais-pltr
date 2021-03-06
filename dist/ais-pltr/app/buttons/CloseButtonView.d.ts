import { AbstractView, AbstractButtonView } from '../lib/index';
export declare class CloseButtonView extends AbstractButtonView {
    name: string;
    textA: string;
    textB: string;
    classList: string;
    private view;
    private isDisabled;
    constructor(selector: string, view: AbstractView);
    close: () => Promise<void>;
    set disable(isDisabled: boolean);
    content(): Promise<DocumentFragment>;
}
