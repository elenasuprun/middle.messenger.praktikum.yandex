export default `
<button class="{{class}}"
        type="{{type}}"
    {{#if isDisabled}}
        disabled
    {{/if}}
>{{text}}</button>`;
