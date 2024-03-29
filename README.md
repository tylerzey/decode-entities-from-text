# Decode entities from text (Works with node)

If you work with apis (particularly ones that give back html), you'll eventually see something like `&#8211;` show up where a `-` should be.

These are html entities. This function parses them out and converts them to what you'd expect to see.

Parsing these out is particularly challenging when working with Nodejs or a build tool like Gatsby.

It's perfect for those Gatsby sites that consume content via a Wordpress api or something. But, build the html in nodejs where you don't have access to the standard html document.

To see a complete list of HTML entities, [see here](https://dev.w3.org/html5/html-author/charref).

## To Use

```js
import decodeEntities from 'decode-entities-from-text';

function MyTitle(props) {
  const { possiblyDirtyString } = props;
  const title = decodeEntities(possiblyDirtyString);

  return <h1>{title}</h1>;
}
```
