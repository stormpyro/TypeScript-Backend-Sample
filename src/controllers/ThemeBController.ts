class ThemeBController {
    defaultMethod(): object {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        }
    }
}

export = new ThemeBController();