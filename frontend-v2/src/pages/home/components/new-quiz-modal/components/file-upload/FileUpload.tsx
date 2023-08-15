import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { Program } from '../../../../../../models/ProgramFile'
import { sx } from './styles'
import pythonLogo from '../../../../../../assets/python-logo.svg'
import AddIcon from '@mui/icons-material/Add'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import './FileUpload.scss'

interface FileUploadProps { 
    programFile: Program | undefined, 
    removeOnClick: () => void, 
    fileOnChange: (file: File) => void,
    error: boolean
}

const FileUpload = ({ programFile, removeOnClick, fileOnChange, error }: FileUploadProps) => {
    const [contentLoadedOnce, setLoadOnce] = useState(false);
    const [enableFileChange, setEnableFileChange] = useState<boolean>(true);

    // added for file animation
    useEffect(() => {
        if (programFile) setLoadOnce(true);
    }, [programFile]);

    useEffect(() => {
        if (!programFile) {
            setTimeout(() => setEnableFileChange(true), 100);
        }
        else {
            setEnableFileChange(false);
        }
    }, [programFile]);
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            fileOnChange(file);
            e.preventDefault();
        }
    };

    return (
        <Box 
            sx={sx.container.getStyle(programFile, error)} 
            className={error ? 'shake' : ''}
            >
            <Box sx={sx.uploadFileBg.getStyle()}>
                <UploadFileIcon sx={{ fontSize: '2rem' }}/>
                <Typography>Upload File</Typography>
            </Box>
            {contentLoadedOnce && 
            <Box sx={sx.uploadFileContent.getStyle()} className={programFile ? 'grow' : 'fade-out'}>
                <Box sx={sx.fileTypeLogoContainer.getStyle()}>
                    <Box component='img'src={pythonLogo} sx={{ height: '4rem' }}/>
                </Box>
                <Box sx={sx.fileInfoContainer.getStyle()}>
                    <Typography sx={{ width: '100%' }}>
                        {programFile ? programFile.file!.name : '--'}
                    </Typography>
                </Box>
            </Box>}
            <Box
                sx={{
                    // outline: '1px solid black',
                    height: '4rem',
                    width: '4rem',
                    position: 'absolute',
                    top: `calc(4rem / -2)`,
                    right: `calc(4rem / -2)`,
                    transition: '.4s ease',
                    bgcolor: programFile ? '' : 'white',
                    transform: `scale(${programFile ? 0 : 1})`
                }}
                />
                <IconButton
                    component='label'
                    onClick={removeOnClick}
                    sx={sx.fileButton.getStyle(programFile)}
                    >
                    {!programFile && 
                        <input 
                            style={{ 
                                display: 'none' 
                            }} 
                            type={enableFileChange ? "file" : ''}
                            name='file' 
                            onChange={handleFileChange} 
                            hidden
                            />}
                    <AddIcon/>
                </IconButton>
        </Box>
    );
}

export default FileUpload;