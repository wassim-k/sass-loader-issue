module.exports = config => {
    var sassRule = config.module.rules.filter(
        rule => rule.test && rule.test.source.indexOf('scss') >= 0
    )[0];

    sassRule.rules[1].use[1].options.sassOptions.importer = _ => ({
        contents: 'x {y: z}'
    });

    return config;
};
