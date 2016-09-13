module.exports = function(text, value) {

   if (!this.opts.texts) return '';

   var text = this.opts.texts[text];

   if (text && value)
     text = text.replace(/{.+}/,value);

    return text;
}

