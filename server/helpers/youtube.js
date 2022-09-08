export const getVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

export const getIframe = (url) => {
  if (url === '') {
    return '';
  }
  const videoId = getVideoId(url);
  const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/'
    + videoId + '" frameborder="0" allowfullscreen></iframe>';
  return iframeMarkup;
}

export const getThumbnail = (url) => {
  const videoId = getVideoId(url);
  const thumbnailUrl = 'http://img.youtube.com/vi/' + videoId + '/0.jpg'
  return thumbnailUrl;
}