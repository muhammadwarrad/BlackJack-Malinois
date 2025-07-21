// src/pages/Home.js
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const [puppies, setPuppies] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "puppies"), orderBy("createdAt","desc"));
    return onSnapshot(q, snapshot =>
      setPuppies(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <a
          href="https://www.instagram.com/blackjackmalinois/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
          aria-label="Blackjack Malinois Instagram"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="12" fill="#232A3D"/>
            <path d="M27.5 12.5h-15A2.5 2.5 0 0 0 10 15v10a2.5 2.5 0 0 0 2.5 2.5h15A2.5 2.5 0 0 0 30 25V15a2.5 2.5 0 0 0-2.5-2.5zm-7.5 3.25A4.25 4.25 0 1 1 15.75 20 4.25 4.25 0 0 1 20 15.75zm0 7A2.75 2.75 0 1 0 17.25 20 2.75 2.75 0 0 0 20 22.75zm5.25-7.75a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" fill="#4169E1"/>
          </svg>
          <span style={{ color: '#4169E1', fontWeight: 600, marginLeft: 10, fontSize: 18 }}>@blackjackmalinois</span>
        </a>
      </div>
      <Grid container spacing={2} sx={{ p:4 }}>
        {puppies.map(p => (
          <Grid item key={p.id} xs={12} sm={6} md={4}>
            <Card component={Link} to={`/puppy/${p.id}`} sx={{ textDecoration: "none" }}>
              <CardMedia component="img" height="200" image={p.photos[0]} />
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Born: {new Date(p.dob.seconds * 1000).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
