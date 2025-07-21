// src/pages/Admin.js
import { useState, useEffect } from "react";
import { collection, addDoc, deleteDoc, doc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { TextField, Button, List, ListItem, IconButton, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Admin() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name:"", dob:"", description:"", photos:"" });

  useEffect(() => {
    return onSnapshot(collection(db, "puppies"), snap =>
      setList(snap.docs.map(d => ({ id:d.id, ...d.data() })))
    );
  }, []);

  const handleAdd = async () => {
    await addDoc(collection(db,"puppies"), {
      ...form,
      dob: new Date(form.dob),
      photos: form.photos.split(","),          // comma-separated URLs
      createdAt: serverTimestamp()
    });
    setForm({ name:"", dob:"", description:"", photos:"" });
  };

  const handleDel = id => deleteDoc(doc(db,"puppies",id));

  return (
    <Box sx={{ p:4, maxWidth:600, mx:"auto" }}>
      <TextField label="Name" fullWidth sx={{ mb:2 }}
        value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      <TextField label="DOB (YYYY-MM-DD)" fullWidth sx={{ mb:2 }}
        value={form.dob} onChange={e=>setForm({...form,dob:e.target.value})}/>
      <TextField label="Desc" fullWidth multiline rows={3} sx={{ mb:2 }}
        value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
      <TextField label="Photo URLs (comma-sep)" fullWidth sx={{ mb:2 }}
        value={form.photos} onChange={e=>setForm({...form,photos:e.target.value})}/>
      <Button variant="contained" onClick={handleAdd}>Add Puppy</Button>

      <List sx={{ mt:4 }}>
        {list.map(p => (
          <ListItem key={p.id}
            secondaryAction={
              <IconButton edge="end" onClick={()=>handleDel(p.id)}>
                <DeleteIcon />
              </IconButton>
            }>
            {p.name} ({new Date(p.dob.seconds*1000).toLocaleDateString()})
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
