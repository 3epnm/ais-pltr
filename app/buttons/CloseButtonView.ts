import { AbstractView, AbstractButtonView } from '../lib/index'

export class CloseButtonView extends AbstractButtonView {
    public name: string = 'Close'
    public textA: string = 'Close'
    public textB: string = ''
    public classList: string = 'mdc-button mdc-card__action mdc-card__action--button'
    private view: AbstractView
    private isDisabled: boolean = false

    constructor(selector: string, view: AbstractView) {
        super(selector)
        this.view = view

        this.register('click', 'button.close', this.close)
    }

    public close = async (): Promise<void> => {
        await this.view.close()
    }

    public set disable(isDisabled: boolean) {
        this.isDisabled = isDisabled
        this.render()
    }

    public async content(): Promise<DocumentFragment> {
        return this.toDocumentFragment(`<button
            class="${this.class} close ${this.classList}"${this.isDisabled && ' disabled="disabled"'}
            aria-label="${this.textA}">${this.textA}</button>`)
    }
}