import React, {useEffect, useState} from 'react';
import { useLoaderData } from "react-router";
import {httpService} from "@core/http-service.js";
import {calculateAge} from "../../../helper/functions.js";
import {Controller, useForm} from "react-hook-form";
import {redirect, useLocation, useNavigate, useSubmit} from "react-router-dom";
import BreadCrumbs from "../../../components/bread-crumbs.jsx";

function UserDetails() {

    const location = useLocation();
    const beadCrumbs = [
        {
            title: 'لیست کاربران',
            path: '/'
        },
        {
            title: 'ویرایش کاربر',
            path: location.pathname
        }
    ]

    const data = useLoaderData();
    const [imagePreview, setImagePreview] = useState(data.avatar);
    const [removeLoading, setRemoveLoading] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const submitForm = useSubmit();

    useEffect(() => {
        if (data.avatar) {
            setImagePreview(data.avatar);
        }
    }, [data.avatar]);

    const onSubmit = (data) => {
        setSubmitLoading(true)
        submitForm(data, { method: "put" });
    };

    const removeUserHandler = async () =>{
        setRemoveLoading(true)
        const response = await httpService.delete(`users/${data.id}`, []);
        if(response.status===200){
            navigate('/');
        }
        else{
            console.log('error happened')
        }

    }

    return (
        <div className="p-10">
            <BreadCrumbs data={beadCrumbs}/>
            <div className="flex min-h-screen items-center justify-center">
                <div className="w-[540px] p-8 shadow-2xl border border-surface-300 rounded-2xl bg-surface-100 drop-shadow-[24px_24px_96px_#0C132C] mt-5 mb-5">
                    <h3 className="border-b border-surface-300 font-normal text-2xl pb-2 mb-5">ویرایش کاربر</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex items-center justify-center mb-5">
                            <Controller
                                name="avatar" // The name for the form field
                                control={control}
                                defaultValue={data.avatar}
                                render={({ field }) => (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="opacity-0 z-10 cursor-pointer rounded-full absolute w-28 h-28"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onload = (e) => {
                                                    field.onChange(e.target.result); // Set Base64 string
                                                    setImagePreview(e.target.result);
                                                };
                                                reader.readAsDataURL(file);
                                            } else {
                                                field.onChange(data.avatar); // Reset to empty string
                                                setImagePreview(null);
                                            }
                                        }}
                                    />
                                )}
                            />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="avatar"
                                    className="rounded-full overflow-hidden relative w-28 h-28 object-cover border-2 border-primary-500 p-1"
                                />
                            )}
                        </div>

                        <div className="flex flex-row justify-between mb-5">
                            <div className="flex flex-col w-[calc(50%-10px)]">
                                <label className="text-surface-500 font-normal mb-2">نام کاربر</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.name && "border-ui-red-500"
                                    }`}
                                    {...register("name", {
                                        required: true,
                                        value: data.name
                                    })}
                                />
                                {errors.name && errors.name.type === "required" && (
                                    <p className="text-ui-red-500 text-sm mt-1">
                                        این فیلد الزامی است.
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col w-[calc(50%-10px)]">
                                <label className="text-surface-500 font-sm mb-2">سن</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.dateOfBirth && "border-ui-red-500"
                                    }`}
                                    {...register("dateOfBirth", {
                                        required: true,
                                        value:calculateAge(data.dateOfBirth),
                                        pattern: /^[0-9]{1,3}$/
                                    })}
                                />
                                {errors.dateOfBirth && errors.dateOfBirth.type === "required" && (
                                    <p className="text-ui-red-500 text-sm mt-1">
                                        این فیلد الزامی است.
                                    </p>
                                )}
                                {errors.dateOfBirth && errors.dateOfBirth.type === "pattern" && (
                                    <p className="text-ui-red-500 text-sm mt-1">فرمت وارد شده صحیح نیست.</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mb-5">
                            <div className="flex flex-col w-[calc(50%-10px)]">
                                <label className="text-surface-500 font-sm mb-2">ایمیل</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.email && "border-ui-red-500"
                                    }`}
                                    {...register("email", {
                                        required: true,
                                        value:data.email,
                                        pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
                                    })}
                                />
                                {errors.email && errors.email.type === "required" && (
                                    <p className="text-ui-red-500 text-sm mt-1">
                                        این فیلد الزامی است.
                                    </p>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <p className="text-ui-red-500 text-sm mt-1">فرمت وارد شده صحیح نیست.</p>
                                )}
                            </div>
                            <div className="flex flex-col w-[calc(50%-10px)]">
                                <label className="text-surface-500 font-sm mb-2">شماره تلفن</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.phoneNumber && "border-ui-red-500"
                                    }`}
                                    {...register("phoneNumber", {
                                        required: true,
                                        value:data.phoneNumber,
                                        pattern: /[0-9]{11}/
                                    })}
                                />
                                {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                                    <p className="text-ui-red-500 text-sm mt-1">
                                        این فیلد الزامی است.
                                    </p>
                                )}
                                {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
                                    <p className="text-ui-red-500 text-sm mt-1">فرمت وارد شده صحیح نیست.</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mb-5">
                            <div className="flex flex-col w-[calc(25%-10px)]">
                                <label className="text-surface-500 font-sm mb-2">کشور</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.country && "border-ui-red-500"
                                    }`}
                                    {...register("country", {
                                        value: data.country
                                    })}
                                />
                            </div>
                            <div className="flex flex-col w-[calc(25%-10px)]">
                                <label className="text-surface-500 font-sm mb-2">شهر</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.city && "border-ui-red-500"
                                    }`}
                                    {...register("city", {
                                        value: data.city
                                    })}
                                />
                            </div>
                            <div className="flex flex-col w-[calc(25%-10px)]">
                                <label className="text-surface-500 font-sm mb-2">خیابان</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.street && "border-ui-red-500"
                                    }`}
                                    {...register("street", {
                                        value: data.street
                                    })}
                                />
                            </div>
                            <div className="flex flex-col w-[calc(25%-10px)]">
                                <label className="text-surface-500 font-sm mb-2">کد پستی</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.zipcode && "border-ui-red-500"
                                    }`}
                                    {...register("zipcode", {
                                        value: data.zipcode
                                    })}
                                />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mb-5">
                            <div className="flex flex-col w-full">
                                <label className="text-surface-500 font-sm mb-2">شرکت</label>
                                <input
                                    className={`text-lg bg-surface-100 text-surface-900 w-full h-12 border border-surface-400 rounded-lg p-4 ${
                                        errors.company && "border-ui-red-500"
                                    }`}
                                    {...register("company", {
                                        required: true,
                                        value: data.company
                                    })}
                                />
                                {errors.company && errors.company.type === "required" && (
                                    <p className="text-ui-red-500 text-sm mt-1">
                                        این فیلد الزامی است.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <button
                                type="submit"
                                className="flex flex-col w-[calc(50%-10px)] items-center justify-center text-lg bg-primary-500 text-surface-900 h-14 rounded-2xl transition-all hover:drop-shadow-[0_0px_8px_#033699] disabled:cursor-no-drop disabled:bg-primary-700 disabled:drop-shadow-none"
                                disabled={submitLoading}
                            >
                                {submitLoading? "درحال ویرایش" : "ویرایش"}
                            </button>
                            <button
                                type="button"
                                className="flex flex-col w-[calc(50%-10px)] items-center justify-center text-lg bg-ui-red-500 text-surface-900 h-14 rounded-2xl transition-all hover:drop-shadow-[0_0px_8px_#8D2129] disabled:cursor-no-drop disabled:bg-ui-red-700 disabled:drop-shadow-none"
                                onClick={removeUserHandler}
                                disabled={removeLoading}
                            >
                                {removeLoading? "درحال حذف" : "حذف"}
                            </button>
                        </div>

                    </form>
                </div>
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

export async function editUserAction({ request, params }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await httpService.put(`users/${params.id}`, data);
    if (response.status === 200) {
        return redirect('/');
    }
}
export default UserDetails;