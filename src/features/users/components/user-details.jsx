import React, {useEffect, useState} from 'react';
import { useLoaderData } from "react-router";
import {httpService} from "@core/http-service.js";
import {calculateAge} from "../../../helper/functions.js";

function UserDetails() {

    const data = useLoaderData();
    const [selectedImage, setSelectedImage] = useState( data.avatar);
    const [imagePreview, setImagePreview] = useState(data.avatar);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = e.target.result;
                setSelectedImage(imageData);
                setImagePreview(imageData);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
            setImagePreview(null);
        }
    };

    useEffect(() => {
        if (data.avatar) {
            setSelectedImage(data.avatar);
            setImagePreview(data.avatar);
        }
    }, [data.avatar]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-[540px] p-8 shadow-2xl border border-surface-300 rounded-2xl bg-surface-100 drop-shadow-[24px_24px_96px_#0C132C] mt-5 mb-5">
                <h3 className="border-b border-surface-300 font-normal text-2xl pb-2 mb-5">ویرایش کاربر</h3>

                <form>

                    <div className="flex items-center justify-center mb-5">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="opacity-0 z-10 cursor-pointer rounded-full absolute w-28 h-28"
                        />
                        {selectedImage && (
                            <img
                                src={imagePreview}
                                alt="avatar"
                                className="rounded-full overflow-hidden relative w-28 h-28 object-cover border border-2 border-primary-500 p-1"
                            />
                        )}
                    </div>

                    <div className="flex flex-row justify-between mb-5">
                        <div className="flex flex-col w-[calc(50%-10px)]">
                            <label className="text-surface-500 font-sm mb-2">نام کاربر</label>
                            <input
                                type="text"
                                value={data.name}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-[calc(50%-10px)]">
                            <label className="text-surface-500 font-sm mb-2">سن</label>
                            <input
                                type="number"
                                value={calculateAge(data.dateOfBirth)}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mb-5">
                        <div className="flex flex-col w-[calc(50%-10px)]">
                            <label className="text-surface-500 font-sm mb-2">ایمیل</label>
                            <input
                                type="email"
                                value={data.email}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-[calc(50%-10px)]">
                            <label className="text-surface-500 font-sm mb-2">شماره تلفن</label>
                            <input
                                type="text"
                                value={data.phoneNumber}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mb-5">
                        <div className="flex flex-col w-[calc(25%-10px)]">
                            <label className="text-surface-500 font-sm mb-2">کشور</label>
                            <input
                                type="text"
                                value={data.country}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                            />
                        </div>
                        <div className="flex flex-col w-[calc(25%-10px)]">
                            <label className="text-surface-500 font-sm mb-2">شهر</label>
                            <input
                                type="text"
                                value={data.city}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                            />
                        </div>
                        <div className="flex flex-col w-[calc(25%-10px)]">
                            <label className="text-surface-500 font-sm mb-2">خیابان</label>
                            <input
                                type="text"
                                value={data.street}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                            />
                        </div>
                        <div className="flex flex-col w-[calc(25%-10px)]">
                            <label className="text-surface-500 font-sm mb-2">کد پستی</label>
                            <input
                                type="text"
                                value={data.zipcode}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-surface-500 font-sm mb-2">شرکت</label>
                            <input
                                type="text"
                                value={data.company}
                                className="text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                        <button
                            type="submit"
                            className="flex flex-col w-[calc(50%-10px)] items-center justify-center text-lg bg-primary-500 text-surface-900 h-14 rounded-2xl transition-all hover:drop-shadow-[0_0px_8px_#033699]"
                        >
                            ویرایش
                        </button>
                        <button
                            type="button"
                            className="flex flex-col w-[calc(50%-10px)] items-center justify-center text-lg bg-ui-red-500 text-surface-900 h-14 rounded-2xl transition-all hover:drop-shadow-[0_0px_8px_#8D2129]"
                        >
                            حذف
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export async function userDetailsLoader({ params }) {
    const response = await httpService.get(
        `users/${params.id}`
    );
    return response.data;
}
export default UserDetails;