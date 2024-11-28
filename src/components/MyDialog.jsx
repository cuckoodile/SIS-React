import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import LiveBg from "../assets/live-bg.gif"
import { useRef, useState, useEffect } from "react"
import React from "react"

import { retrieveProfiles, createProfiles, updateProfiles, deleteProfiles } from "../api/profiles"
import AddressSelect from "../components/ui/mySelectAddress"

const MyCustomDialog = React.forwardRef(({ data, open, setOpen, reloader, setReloader, key, children, ...props }, ref) => {


    const [students, setStudents] = useState([data])

    // Value references
    // Add student info ref
    const firstNameRef = useRef(null)
    const schoolYearRef = useRef(null)
    const middleNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const gradeRef = useRef(null)
    const genderRef = useRef(null)
    const ageRef = useRef(null)
    const sectionRef = useRef(null)
    const statusRef = useRef(null)
    // Add student address ref
    const provinceRef = useRef(null)
    const cityRef = useRef(null)
    const municipalityRef = useRef(null)
    const barangayRef = useRef(null)
    const streetAddressRef = useRef(null)
    const zipCodeRef = useRef(null)
    // Update student info ref
    const updateFirstNameRef = useRef(null)
    const updateSchoolYearRef = useRef(null)
    const updateMiddleNameRef = useRef(null)
    const updateLastNameRef = useRef(null)
    const updateGradeRef = useRef(null)
    const updateGenderRef = useRef(null)
    const updateAgeRef = useRef(null)
    const updateSectionRef = useRef(null)
    const updateStatusRef = useRef(null)
    // Update student address ref
    const updateProvinceRef = useRef(null)
    const updateCityRef = useRef(null)
    const updateMunicipalityRef = useRef(null)
    const updateBarangayRef = useRef(null)
    const updateStreetAddressRef = useRef(null)
    const updateZipCodeRef = useRef(null)

    const addresses = [
        { province: ["Taytay", "Abra", "Aklan", "Bulacan", "Metro-Manila", "Laguna", "Cavite", "Rizal"] },
        { city: ["Quezon City", "Palayan", "Manila", "Davao", "San Juan", "Cebu", "Makati", "Pasig"] },
        { municipality: ["Santa Maria", "Bocaue", "Marilao", "Meycauayan", "San Jose del Monte", "Angat", "San Miguel", "Pandi"] },
        { barangay: ["Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5", "Barangay 6", "Barangay 7", "Barangay 8"] },
    ];

    useEffect(() => {
        retrieveProfiles()
            .then(res => {
                if (res.ok) {
                    setStudents(res.data)
                }
            })
    }, [reloader])

    const handleAdd = () => {
        const postData = { firstName: firstNameRef.current.value, middleName: middleNameRef.current.value, lastName: lastNameRef.current.value, schoolYear: schoolYearRef.current.value, grade: gradeRef.current.value, gender: genderRef.current.value, age: ageRef.current.value, section: sectionRef.current.value, status: statusRef.current.value, address: { province: provinceRef.current.value, city: cityRef.current.value, municipality: municipalityRef.current.value, barangay: barangayRef.current.value, streetAddress: streetAddressRef.current.value, zipCode: zipCodeRef.current.value } }


        createProfiles(postData).then(res => {
            if (res.ok) {
                setReloader(!reloader)
                setOpen(false)
            } else {
                console.log(res.errors)
            }
        })
    }

    const handleUpdate = (Id) => {
        console.log(updateStreetAddressRef.current.value)
        const patchData = { id:Id, firstName: updateFirstNameRef.current.value, middleName: updateMiddleNameRef.current.value, lastName: updateLastNameRef.current.value, schoolYear: updateSchoolYearRef.current.value, grade: updateGradeRef.current.value, gender: updateGenderRef.current.value, age: updateAgeRef.current.value, section: updateSectionRef.current.value, status: updateStatusRef.current.value, address: { province: updateProvinceRef.current.value, city: updateCityRef.current.value, municipality: updateMunicipalityRef.current.value, barangay: updateBarangayRef.current.value, streetAddress: updateStreetAddressRef.current.value, zipCode: updateZipCodeRef.current.value } }


        updateProfiles(patchData).then(res => {
            if (res.ok) {
                setReloader(!reloader)
                setOpen(false)
            } else {
                console.log(res.errors)
            }
        })
    }

    const handleDelete = (Id) => {
        const deleteData = { id: Id }

        deleteProfiles(deleteData).then(res => {
            if (res.ok) {
                setReloader(!reloader)
                setOpen(false)
            } else {
                console.log(res.errors)
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} key={key}>
            <DialogContent className="flex flex-col justify-between items-center pt-[3rem] px-0 h-[70vh] w-[70vw] bg-cover bg-center" style={{ backgroundImage: `url(${LiveBg})` }}>
                <DialogHeader>
                    <DialogTitle className="text-white text-4xl text-center">{data?.title}</DialogTitle>
                    <DialogDescription className="text-white text-[1rem] text-center">{data?.description}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="py-2 px-0 w-[80%] flex flex-col bg-black text-[1.2rem] text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-y border-gray-100">
                    {data.title === 'VIEW' && (
                        <div className="flex flex-col items-center gap-2">
                            <section className="flex w-[90%]">
                                <label className="w-[30%]">Full Name</label>
                                <p className="flex-1 text-center">{`${data?.lastName}, ${data?.firstName} ${data?.middleName}` || "no data"}</p>
                            </section>
                            <section className="flex justify-between w-[90%]">
                                <label className="flex-1">School Year</label>
                                <p className="flex-1">{`${data?.schoolYear}` || "no data"}</p>
                            </section>
                            <section className="flex justify-between w-[90%]">
                                <label className="flex-1">Gender</label>
                                <p className="flex-1">{`${data?.gender}` || "no data"}</p>
                            </section>
                            <section className="flex justify-between w-[90%]">
                                <label className="flex-1">Age</label>
                                <p className="flex-1">{`${data?.age}` || "no data"}</p>
                            </section>
                            <section className="flex justify-between w-[90%]">
                                <label className="flex-1">Grade</label>
                                <p className="flex-1">{data?.grade || "no data"}</p>
                            </section>
                            <section className="flex justify-between w-[90%]">
                                <label className="flex-1">Section</label>
                                <p className="flex-1">{data?.section || "no data"}</p>
                            </section>
                            <section className="flex justify-between w-[90%]">
                                <label className="flex-1">Status</label>
                                <p className="flex-1">{data?.status || "no data"}</p>
                            </section>
                            <h2 className="text-2xl ">ADDRESS</h2>
                            <div className="w-[90%]">
                                {students.map((student) => (<div key={student.id} className="student-info flex flex-col gap-2">
                                    <section className="flex justify-between w-[90%]">
                                        <label className="flex-1">Province</label>
                                        <p className="flex-1">{student.address?.province || "no data"}</p>
                                    </section>
                                    <section className="flex justify-between w-[90%]">
                                        <label className="flex-1">City</label>
                                        <p className="flex-1">{student.address?.city || "no data"}</p>
                                    </section>
                                    <section className="flex justify-between w-[90%]">
                                        <label className="flex-1">Municipality</label>
                                        <p className="flex-1">{student.address?.municipality || "no data"}</p>
                                    </section>
                                    <section className="flex justify-between w-[90%]">
                                        <label className="flex-1">Zip Code</label>
                                        <p className="flex-1">{student.address?.zipCode || "no data"}</p>
                                    </section>
                                    <section className="flex justify-between w-[90%]">
                                        <label className="flex-1">Barangay</label>
                                        <p className="flex-1">{student.address?.barangay || "no data"}</p>
                                    </section>
                                    <section className="flex justify-between w-[90%]">
                                        <label className="flex-1">Street Address</label>
                                        <p className="flex-1">{student.address?.streetAddress || "no data"}</p>
                                    </section>
                                </div>))}
                            </div>
                        </div>
                    )}

                    {data.title === 'ADD' && (
                        <div className="flex flex-col items-center gap-2">
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">First Name</label>
                                <input type="text" className="flex-1 bg-transparent border-b-[2px] px-2" ref={firstNameRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Middle Name</label>
                                <input type="text" className="flex-1 bg-transparent border-b-[2px] px-2" ref={middleNameRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Last Name</label>
                                <input type="text" className="flex-1 bg-transparent border-b-[2px] px-2" ref={lastNameRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">School Year</label>
                                <input type="number" className="flex-1 bg-transparent border-b-[2px] px-2" ref={schoolYearRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Gender</label>
                                <input type="text" className="flex-1 bg-transparent border-b-[2px] px-2" ref={genderRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Age</label>
                                <input type="number" className="flex-1 bg-transparent border-b-[2px] px-2" ref={ageRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Grade</label>
                                <input type="number" className="flex-1 bg-transparent border-b-[2px] px-2" ref={gradeRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Section</label>
                                <input type="text" className="flex-1 bg-transparent border-b-[2px] px-2" ref={sectionRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Status</label>
                                <input type="text" className="flex-1 bg-transparent border-b-[2px] px-2" ref={statusRef} />
                            </section>
                            {/* Address selection */}
                            <h2>ADDRESS</h2>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Province</label>
                                <select ref={provinceRef} name="province" id="province" className="text-black flex-1 text-center cursor-pointer">
                                    <option hidden={true}>select</option>
                                    {addresses[0].province.map((province, index) => (
                                        <option key={index} value={province}>{province}</option>))}
                                </select>
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">City</label>
                                <select ref={cityRef} name="city" id="city" className="text-black flex-1 text-center cursor-pointer">
                                    <option hidden={true}>select</option>
                                    {addresses[1].city.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>))}
                                </select>
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[50%]">Municipality</label>
                                <select ref={municipalityRef} name="municipality" id="municipality" className="text-black w-[50%] text-center cursor-pointer">
                                    <option hidden={true}>select</option>
                                    {addresses[2].municipality.map((municipality, index) => (
                                        <option key={index} value={municipality}>{municipality}</option>))}
                                </select>
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Barangay</label>
                                <select ref={barangayRef} name="barangay" id="barangay" className="text-black flex-1 text-center cursor-pointer">
                                    <option hidden={true}>select</option>
                                    {addresses[3].barangay.map((barangay, index) => (
                                        <option key={index} value={barangay}>{barangay}</option>))}
                                </select>
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Street Address</label>
                                <input ref={streetAddressRef} type="text" className="flex-1 bg-transparent border-b-[2px] px-2" />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Zip Code</label>
                                <input ref={zipCodeRef} type="number" className="flex-1 bg-transparent border-b-[2px] px-2" />
                            </section>
                        </div>
                    )}

                    {data.title === 'EDIT' && (
                        <div className="flex flex-col items-center gap-2">
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">First Name</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.firstName} ref={updateFirstNameRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">Middle Name</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.middleName} ref={updateMiddleNameRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">Last Name</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.lastName} ref={updateLastNameRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">School Year</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.schoolYear} ref={updateSchoolYearRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">Gender</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.gender} ref={updateGenderRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">Age</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.age} ref={updateAgeRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">Grade</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.grade} ref={updateGradeRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">Section</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.section} ref={updateSectionRef} />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[40%]">Status</label>
                                <input type="text" className="w-[70%] bg-transparent border-b-[2px] px-2" defaultValue={data?.status} ref={updateStatusRef} />
                            </section>
                            <h2>ADDRESS</h2>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Province</label>
                                <select ref={updateProvinceRef} defaultValue={data.address.province} name="province" id="province" className="text-black flex-1 text-center cursor-pointer">
                                    <option hidden={true}>select</option>
                                    {addresses[0].province.map((province, index) => (
                                        <option key={index} value={province}>{province}</option>))}
                                </select>
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">City</label>
                                <select ref={updateCityRef} defaultValue={data.address.city} name="city" id="city" className="text-black flex-1 text-center cursor-pointer">
                                    <option hidden={true}>select</option>
                                    {addresses[1].city.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>))}
                                </select>
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="w-[50%]">Municipality</label>
                                <select ref={updateMunicipalityRef} defaultValue={data.address.municipality} name="municipality" id="municipality" className="text-black w-[50%] text-center cursor-pointer">
                                    <option hidden={true}>select</option>
                                    {addresses[2].municipality.map((municipality, index) => (
                                        <option key={index} value={municipality}>{municipality}</option>))}
                                </select>
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Barangay</label>
                                <select ref={updateBarangayRef} defaultValue={data.address.barangay} name="barangay" id="barangay" className="text-black flex-1 text-center cursor-pointer">
                                    <option hidden={true}>select</option>
                                    {addresses[3].barangay.map((barangay, index) => (
                                        <option key={index} value={barangay}>{barangay}</option>))}
                                </select>
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Street Address</label>
                                <input ref={updateStreetAddressRef} defaultValue={data.address.streetAddress} type="text" className="flex-1 bg-transparent border-b-[2px] px-2" />
                            </section>
                            <section className="flex justify-between w-[90%] gap-2">
                                <label className="flex-1">Zip Code</label>
                                <input ref={updateZipCodeRef} defaultValue={data.address.zipCode} type="number" className="flex-1 bg-transparent border-b-[2px] px-2" />
                            </section>
                        </div>
                    )}

                    {data.title === 'DELETE' && (
                        <section className="flex flex-col items-center justify-center">
                            <h2>Are you sure to delete</h2>
                            <p>{data?.studentName}</p>
                            <section className="flex gap-3 mt-6">
                                <Button variant="destructive" onClick={() => { handleDelete(data?.id) }}>Yes</Button>
                                <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                            </section>
                        </section>
                    )}

                </ScrollArea>
                <section className="flex gap-4">
                    {/* Delete button */}
                    {data.title !== 'DELETE' && (<Button className="text-white" onClick={() => { setOpen(false) }}>Close</Button>)}
                    {/* Add button */}
                    {data.title === 'ADD' && (<Button className="text-white" onClick={handleAdd}>Save</Button>)}
                    {/* Edit button */}
                    {data.title === 'EDIT' && (<Button className="text-white" onClick={() => {
                        handleUpdate(data.id)
                    }}>Save</Button>)}
                </section>
            </DialogContent>
        </Dialog>
    )
})


export default MyCustomDialog;
