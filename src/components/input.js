export default `
<label class="{{class}}">
    {{label}}
    <input
        type="{{type}}"
        name="{{name}}"
        {{#if placeholder}}
            placeholder="{{placeholder}}"
        {{/if}}
    >
    {{#if isInvalid}}
        <span class="message message__error">{{message}}</span>
    {{/if}}
</label>
`;
