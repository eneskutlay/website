export const renderBody = (body) => {
    const { style } = body;
    switch (style) {
      case "h1":
        return <h1>{body.children[0].text}</h1>;
      case "h2":
        return <h2>{body.children[0].text}</h2>;
      case "h3":
        return <h3>{body.children[0].text}</h3>;
      case "h4":
        return <h4>{body.children[0].text}</h4>;
      case "h5":
        return <h5>{body.children[0].text}</h5>;
      case "h6":
        return <h6>{body.children[0].text}</h6>;
      case "blockquote":
        return <blockquote>{body.children[0].text}</blockquote>;
      case "normal":
        return <p>{body.children[0].text}</p>;
      case "pre":
        return <pre>{body.children[0].text}</pre>;
      case "ul":
        return <ul>{body.children[0].text}</ul>;
      case "ol":
        return <ol>{body.children[0].text}</ol>;
      case "li":
        return <li>{body.children[0].text}</li>;
      default:
    }
  };