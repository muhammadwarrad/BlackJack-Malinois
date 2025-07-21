// src/pages/PuppyDetail.js
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

export default function PuppyDetail() {
  const { id } = useParams();
  const [p, setP] = useState(null);

  useEffect(() => {
    getDoc(doc(db, "puppies", id)).then(d => setP({ id:d.id, ...d.data() }));
  }, [id]);

  if (!p) return <Typography>Loading…</Typography>;
  return (
    <Box sx={{ p:4 }}>
      <Typography variant="h4">{p.name}</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Born: {new Date(p.dob.seconds * 1000).toLocaleDateString()}
      </Typography>
      <Box sx={{ display: "flex", overflowX: "auto", mt:2 }}>
        {p.photos.map((url,i) => (
          <Box component="img" key={i} src={url} sx={{ height: 300, mr:2 }} />
        ))}
      </Box>
      <Typography sx={{ mt:2 }}>{p.description}</Typography>
    </Box>
  );
}
