import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "./LanguageContext";

export default function TextareaDecorators(props) {
  const { languageApp } = useContext(LanguageContext);
  const [text, setText] = useState("");
  const languages = {
    characters: languageApp === "it" ? "caratteri" : "character(s)",
    inText:
      languageApp === "it" ? "inserisci il testo qui" : "insert text here....",
  };
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);

  let handleInputChange = (event) => {
    let value = event.target.value;
    text.length < 200
      ? setText(value)
      : setText(text.slice(0, text.length - 1));
    props.passaState && props.passaState(value);
  };

  useEffect(() => {
    if (props.sentComment.sent) {
      setText("");
      props.sentComment.setSent(false);
    }
  }, [props]);

  return (
    <Textarea
      placeholder={languages.inText}
      value={text}
      onChange={handleInputChange}
      minRows={2}
      maxRows={4}
      startDecorator={
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("👍")}
          >
            👍
          </IconButton>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("🏖")}
          >
            🏖
          </IconButton>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={addEmoji("😍")}
          >
            😍
          </IconButton>
        </Box>
      }
      endDecorator={
        <Typography level="body3" sx={{ ml: "auto" }}>
          {text.length}/200 {languages.characters}
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
  );
}
