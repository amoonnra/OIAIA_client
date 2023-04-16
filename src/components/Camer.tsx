import * as React from 'react';
import {Camera, CameraProps} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Dialog } from '@headlessui/react'

interface ICameraProps {
	setIsOpen: (k: boolean) => void
	isOpen: boolean
}

const PhoneCamera: React.FunctionComponent<ICameraProps> = ({setIsOpen, isOpen}) => {
	const handleTakePhoto = (dataUri: string) => {
		console.log(dataUri)
		Camera
	}
	return     <div>  
	<Dialog open={isOpen}  className='CameraDialog' onClose={() => {
		setIsOpen(false)}
	}>
	<Dialog.Panel className='CameraDialogPanel'>
	  <Dialog.Title className='CameraDialogTitle'>Определить продукт по фото</Dialog.Title>
	  <Dialog.Description className='CameraDialogContent'>
	  	<Camera onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }/>
	  </Dialog.Description>

	  <button onClick={() => setIsOpen(false)}>Отмена</button>
	</Dialog.Panel>
 </Dialog>
 </div>
};

export default PhoneCamera;
