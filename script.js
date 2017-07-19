/*Babel JS*/

    var MarkupEdit = React.createClass({

    getInitialState: function() {
    return {
        content: "[Tutorial](https://guides.github.com/features/mastering-markdown/#examples)\n" +
        "\n" +
        "# This is an <h1> tag\n" +
        "## This is an <h2> tag\n" +
        "\n" +
        "*This text will be italic*\n" +
        "_This will also be italic_\n" +
        "\n" +
        "**This text will be bold**\n" +
        "__This will also be bold__\n" +
        "\n" +
        "\n" +
        "* Item 1\n" +
        "* Item 2\n" +
        "  * Item 2a\n" +
        "  * Item 2b\n" +
        "\n" +
        "\n" +
        "1. Item 1\n" +
        "1. Item 2\n" +
        "1. Item 3\n" +
        "   1. Item 3a\n" +
        "   1. Item 3b\n" +
        "\n" +
        "As Kanye West said:\n" +
        "\n" +
        "> We're living the future so\n" +
        "> the present is our past.\n" +
        "\n" +
        "I think you should use an\n" +
        "`<addr>` element here instead."
    };
    },

    markup: function(){
        var markup = marked(this.state.content,{sanitize:true})
        //alert( marked('));
        return {
            __html: markup
        }
    },

    handleChange: function (event) {
        this.setState({
            content: event.target.value
        })
    },

    render: function(){
        return (
            <div>
                <div className="col-md-6">
                    <h3>Markdown :</h3>
                    <textarea id="markdown" onChange={this.handleChange} defaultValue={this.state.content}></textarea>
                </div>
                <div className="col-md-6">
                    <h3>Preview :</h3>
                    <div id="displayPreview" dangerouslySetInnerHTML={this.markup()}></div>
                </div>
            </div>
    )
    }
})


    ReactDOM.render(
        <MarkupEdit />,
        document.getElementById('container')
    )
