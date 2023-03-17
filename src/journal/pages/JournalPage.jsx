
import { useDispatch, useSelector } from "react-redux";
import { savingNewNote, startNewNote } from "../../store/journal";

import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import IconButton from "@mui/material/IconButton";

import AddOutlined from "@mui/icons-material/AddOutlined  ";

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(savingNewNote());
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>

      { (!!active)
        ? <NoteView /> 
        : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "#61788C",
          ":hover": { backgroundColor: "#61788C", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
