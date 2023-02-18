type ShareParams = { title: string; text: string; url: string };

const share = ({ title, text, url }: ShareParams): void => {
  window.navigator.clipboard.writeText(text);

  if (window.navigator.share) {
    window.navigator.share({
      title: title,
      text: text,
      url: url,
    });
  }
};

export default share;
