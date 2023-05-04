import React, { useState } from "react";
import "../../App.css";
import YouTubeEmbed from "../YouTubeEmbeded";
import "../style.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

function createData(name, streams, danceability, tempo, energy, valance) {
  return { name, streams, danceability, tempo, energy, valance };
}

function Search() {
  const [song, setSong] = useState("");
  const [videoId, setVideoId] = useState("");
  const [stream, setStream] = useState("");
  const [danceability, setDanceability] = useState("");
  const [tempo, setTempo] = useState("");
  const [energy, setEnergy] = useState("");
  const [valance, setValance] = useState("");
  const [topWords, setTopWords] = useState("images/top_words/TOP_WORDS.JPG");
  const [topBigrams, setTopBigrams] = useState(
    "images/top_bigrams/TOP_BIGRAMS.JPG"
  );
  const [topicModeling, setTopicModeling] = useState(
    "images/topic_modeling/TOPIC_MODELING.JPG"
  );

  const rows = [createData(song, stream, danceability, tempo, energy, valance)];

  const handleSearchClick = () => {
    const enteredSong = song.toLocaleLowerCase();

    if (enteredSong === "blinding lights") {
      setVideoId("4NRXx6U8ABQ");
      setStream("3,386,520,288");
      setDanceability("0.514");
      setTempo("171.005");
      setEnergy("0.73");
      setValance("0.334");
      setTopWords("images/top_words/Blinding_Lights_Top_Words.png");
      setTopBigrams("images/top_bigrams/Blinding_Lights_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/blinding500.PNG");
    } else if (enteredSong === "shape of you") {
      setVideoId("JGwWNGJdvx8");
      setStream("3,362,005,201");
      setDanceability("0.825");
      setTempo("95.977");
      setEnergy("0.652");
      setValance("0.931");
      setTopWords("images/top_words/Shape_of_You_Top_Words.png");
      setTopBigrams("images/top_bigrams/Shape_of_You_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/shape500.PNG");
    } else if (enteredSong === "someone you loved") {
      setVideoId("zABLecsR5UE");
      setStream("2,634,013,335");
      setDanceability("0.501");
      setTempo("109.891");
      setEnergy("0.405");
      setValance("0.446");
      setTopWords("images/top_words/Someone_You_Loved_Top_Words.png");
      setTopBigrams("images/top_bigrams/Someone_You_Loved_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/someoneloved500.PNG");
    } else if (enteredSong === "rockstar") {
      setVideoId("UceaB4D0jpo");
      setStream("2,594,926,619");
      setDanceability("0.585");
      setTempo("159.801");
      setEnergy("0.52");
      setValance("0.129");
      setTopWords("images/top_words/rockstar_Top_Words.png");
      setTopBigrams("images/top_bigrams/rockstar_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/rockstar500.PNG");
    } else if (enteredSong === "sunflower") {
      setVideoId("ApXoWvfEYVU");
      setStream("2,538,329,799");
      setDanceability("0.755");
      setTempo("89.96");
      setEnergy("0.522");
      setValance("0.925");
      setTopWords("images/top_words/Sunflower_Top_Words.png");
      setTopBigrams("images/top_bigrams/Sunflower_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/sunflower500.PNG");
    } else if (enteredSong === "one dance") {
      setVideoId("qL7zrWcv6XY");
      setStream("2,522,431,995");
      setDanceability("0.792");
      setTempo("103.967");
      setEnergy("0.625");
      setValance("0.37");
      setTopWords("images/top_words/One_Dance_Top_Words.png");
      setTopBigrams("images/top_bigrams/One_Dance_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/onedance500.PNG");
    } else if (enteredSong === "closer") {
      setVideoId("0zGcUoRlhmw");
      setStream("2,456,205,158");
      setDanceability("0.748");
      setTempo("95.01");
      setEnergy("0.524");
      setValance("0.661");
      setTopWords("images/top_words/Closer_Top_Words.png");
      setTopBigrams("images/top_bigrams/Closer_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/closer500.PNG");
    } else if (enteredSong === "believer") {
      setVideoId("7wtfhZwyrcc");
      setStream("2,369,272,335");
      setDanceability("0.776");
      setTempo("124.949");
      setEnergy("0.78");
      setValance("0.666");
      setTopWords("images/top_words/Believer_Top_Words.png");
      setTopBigrams("images/top_bigrams/Believer_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/believer500.PNG");
    } else if (enteredSong === "stay") {
      setVideoId("kTJczUoc26U");
      setStream("2,365,777,505");
      setDanceability("0.591");
      setTempo("169.928");
      setEnergy("0.764");
      setValance("0.478");
      setTopWords("images/top_words/STAY_Top_Words.png");
      setTopBigrams("images/top_bigrams/STAY_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/stay500.PNG");
    } else if (enteredSong === "perfect") {
      setVideoId("2Vv-BfVoq4g");
      setStream("2,312,689,776");
      setDanceability("0.599");
      setTempo("95.05");
      setEnergy("0.448");
      setValance("0.168");
      setTopWords("images/top_words/Perfect_Top_Words.png");
      setTopBigrams("images/top_bigrams/Perfect_Top_Bigrams.png");
      setTopicModeling("images/topic_modeling/perfect500.PNG");
    } else {
      setVideoId("");
      setStream("");
      setDanceability("");
      setTempo("");
      setEnergy("");
      setValance("");
      setTopWords("images/top_words/TOP_WORDS.JPG");
      setTopBigrams("images/top_bigrams/TOP_BIGRAMS.JPG");
      setTopicModeling("images/topic_modeling/TOPIC_MODELING.JPG");
    }
  };

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 400,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  return (
    <>
      <div className="search">SEARCH</div>
      <div className="search-input-container">
        <TextField
          label="Enter Song Title"
          variant="outlined"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <HtmlTooltip
          title={
            <React.Fragment>
              <b>
                {"Note: The only searchable songs currently are: "} <br />
              </b>
              {"-Shape of You"} <br />
              {"-Perfect"} <br />
              {"-Sunflower"} <br />
              {"-Believer"} <br />
              {"-One Dance"} <br />
              {"-Closer"} <br />
              {"-Someone You Loved"} <br />
              {"-STAY"} <br />
              {"-rockstar"} <br />
              {"-Blinding Lights"} <br />
            </React.Fragment>
          }
          arrow
        >
          <Button variant="contained" onClick={handleSearchClick}>
            SEARCH
          </Button>
        </HtmlTooltip>
      </div>
      <div className="song-table">
        <TableContainer component={Paper} sx={{ maxWidth: 750 }}>
          <Table sx={{ maxWidth: 750 }} aria-label="song table">
            <TableHead>
              <TableRow>
                <TableCell>Song Name</TableCell>
                <TableCell align="right">Streams Count</TableCell>
                <TableCell align="right">Danceability</TableCell>
                <TableCell align="right">Tempo</TableCell>
                <TableCell align="right">Energy</TableCell>
                <TableCell align="right">Valance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.streams}</TableCell>
                  <TableCell align="right">{row.danceability}</TableCell>
                  <TableCell align="right">{row.tempo}</TableCell>
                  <TableCell align="right">{row.energy}</TableCell>
                  <TableCell align="right">{row.valance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="image-container">
        <h2 className="search-text">Descriptive Analysis</h2>
        <div className="top-words-and-bigrams">
          <img src={topWords} alt="Blank Top Words" className="search-image" />
          <img
            src={topBigrams}
            alt="Blank Top Bi-grams"
            className="search-image"
          />
        </div>
        <h2 className="search-text">Topic Modeling</h2>
        <div className="topic-modeling">
          <img
            src={topicModeling}
            alt="Blank Topic Modeling"
            className="search-image"
          />
        </div>
      </div>
      <h2 className="search-text">YouTube Video</h2>
      <YouTubeEmbed embedId={videoId === "" ? "fx2Z5ZD_Rbo" : videoId} />
    </>
  );
}

export default Search;
