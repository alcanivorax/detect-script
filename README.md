# detect-script

Detect Unicode script from a text string.

<br />

## Usage

```ts
import { detectPrimaryScript, detectScripts } from "detect-script";

detectPrimaryScript("Hello"); // "Latin"
detectPrimaryScript("你好，你今天怎麼樣？"); // "Han"
detectPrimaryScript("Привет, как дела?"); // "Cyrillic"
detectPrimaryScript("こんにちは"); // "Hiragana"

detectScripts("यह एक वाक्य Hello おはよう"); // ["Devanagari", "Latin", "Hiragana"]
```

<br />

## Notes

- Script-based detection only (not human language detection)
- Deterministic and Unicode-range based
- Mixed or ambiguous input returns `"Unknown"`

<br />

## License

MIT
