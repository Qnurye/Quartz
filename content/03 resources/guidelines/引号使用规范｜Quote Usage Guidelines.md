---
publish: true
aliases: ""
created: 2025-12-15T13:23:25+08:00
modified: 2025-12-28T01:41:57.764+08:00
cssclasses: ""
---


# 中文语境

## 1. 简体中文

在规范的简体中文横排文稿中，建议遵循国家标准 [^1]：

- **第一层**：使用双引号 `“”`。
- **嵌套层**：使用单引号 `‘’`。
- **标点位置**：
    - 句号、逗号等标点符号通常位于引号**内**，当
        - 引文是一个完整的、独立的句子
        - “某某说”插在引文中间
    - 句号、逗号等放在引号**外**，当
        - 引文是句子的一部分，不带句末点号
        - 前面是逗号或没有标点，引文不完整
        - 引用多个短语或词语，不构成完整句

> [!example]
> “他问我：‘你读过《红楼梦》吗？’我说读过。”

## 2. 繁体中文

在繁体中文（台湾、香港）及日文语境中，或为了追求排版美学，推荐使用直角引号 [^2]：

- **第一层**：使用 `「」`。
- **嵌套层**：使用 `『』`。
- **输入技巧**：在 macOS 自带中文输入法中，于 `「」` 内按 `⇧[` / `⇧]` 继续输入括号，即可自动切换为 `『』`。

> [!example]
> 「他問我：『你讀過《紅樓夢》嗎？』我說讀過。」

本人日常偏好使用直角引号 `「」`。

---

# Western Context

## 1. English Usage

### US Style

- **Primary**: Double quotes `“…”`.
- **Secondary (Nested)**: Single quotes `‘…’`.
- **Punctuation**: Periods and commas are placed **inside** the closing quotation mark, regardless of logic. [^3]

> [!example]
> "I read 'The Raven,'" he said.

### UK Style

- **Primary**: Historically single quotes `‘…’`, though double quotes are increasingly common.
- **Secondary (Nested)**: Double quotes `“…”`.
- **Punctuation**: Follows "logical quotation." Punctuation is placed **outside** unless it is part of the original quoted material. [^4]

> [!example]
> He called it ‘meaningless’; however, I disagree.

## 2. European Usage (Guillemets)

Guillemets (`«»`) are the standard quotation marks in many European languages, though styles vary significantly by region.

- **French Style**: Uses pointing-out guillemets with non-breaking spaces. [^5]

> [!example]
> « texte »

- **German Style**: Often uses "chevrons" (pointing in) or low-high curly quotes. [^6]

> [!example]
> `»Text«` or `„Text“`

- **Italian/Swiss**: Similar to French but often without the extra spacing.

> [!example]
> `«testo»`

---

# Technical Note

In programming and markup languages (JSON, YAML, JavaScript, etc.), always use straight quotes:

- **Single**: `'` (U+0027)
- **Double**: `"` (U+0022)

Smart quotes (curly quotes) will cause syntax errors in code.

[^1]: [GB/T 15834-2011《标点符号用法》](http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf)
[^2]: [教育部《重訂標點符號手冊》 (修訂版)](https://language.moe.gov.tw/001/upload/files/site_content/m0001/hau/h6.htm)
[^3]: [The Chicago Manual of Style Online](https://www.chicagomanualofstyle.org/book/ed17/part2/ch13/toc.html)
[^4]: [University of Oxford Style Guide](https://www.ox.ac.uk/sites/files/oxford/aUniversity_of_Oxford_Style_Guide_2025.docx)
[^5]: [Lexique des règles typographiques en usage à l'Imprimerie nationale](https://les-unpertinents.fr/Manuscrits/Lexique%20des%20r%C3%A8gles%20typographiques%20en%20usage%20%C3%A0%20l%27Imprimerie%20nationale2.pdf)
[^6]: [Duden - Anführungszeichen](https://www.duden.de/sprachwissen/rechtschreibregeln/anfuehrungszeichen)
