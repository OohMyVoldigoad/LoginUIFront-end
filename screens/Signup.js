import { View, Text, Image, Pressable, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const [selectedGender, setSelectedGender] = useState(null);

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [mobileNumber, setMobileNumber] = useState('');

    const [DateofBirth, setDateofBirth] = useState("");
    const [date, setDate] = useState(new Date());
    const [showPIcker, setShowPIcker] = useState(false);
    const [dobLabel] = useState('Date of Birth');
    const toggleDatepicker = () => {
        setShowPIcker(!showPIcker);
    }
    const onChange = ({type}, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);

            if (Platform.OS === "android") {
                toggleDatepicker();
                setDateofBirth(currentDate.toDateString());
            }
        } else {
            toggleDatepicker();
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.pWhite }}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 10}}>
        <View style={{alignItems: 'center'}}></View>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 19,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Create your account, {name}
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Start booking your field with registration your data!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Your name</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your name'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Mobile Number</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "85%"
                            }}
                            value={mobileNumber}
                            onChangeText={(text) => setMobileNumber(text)}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{ width: "100%" }}
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text);
                                if (text !== confirmPassword) {
                                    setPasswordError("Password and Confirm Password do not match");
                                } else {
                                    setPasswordError("");
                                }
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                    {passwordError && (
                        <Text style={{ color: 'red' }}>{passwordError}</Text>
                    )}
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Confirm Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Confirm your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{ width: "100%" }}
                            value={confirmPassword}
                            onChangeText={(text) => {
                                setConfirmPassword(text);
                                if (text !== password) {
                                    setPasswordError("Password and Confirm Password do not match");
                                } else {
                                    setPasswordError("");
                                }
                            }}
                        />


                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                    {passwordError && (
                        <Text style={{ color: 'red' }}>{passwordError}</Text>
                    )}
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Jenis kelamin</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity
                            onPress={() => setSelectedGender('Laki-Laki')}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                height: 52,
                                borderWidth: selectedGender === 'Laki-Laki' ? 3 : 1, // Atur gaya jika dipilih
                                borderColor: COLORS.secondary,
                                marginRight: 4,
                                borderRadius: 10,
                                backgroundColor: selectedGender === 'Laki-Laki' ? COLORS.primary : COLORS.pWhite
                            }}
                        >
                            <Image
                                source={require("../assets/userp.png")}
                                style={{
                                    height: 36,
                                    width: 36,
                                    marginRight: 8
                                }}
                                resizeMode='contain'
                            />

                            <Text>Laki-Laki</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setSelectedGender('Perempuan')}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                height: 52,
                                borderWidth: selectedGender === 'Perempuan' ? 3 : 1, // Atur gaya jika dipilih
                                borderColor: COLORS.secondary,
                                marginRight: 4,
                                borderRadius: 10,
                                backgroundColor: selectedGender === 'Perempuan' ? COLORS.primary : COLORS.pWhite
                            }}
                        >
                            <Image
                                source={require("../assets/userw.png")}
                                style={{
                                    height: 36,
                                    width: 36,
                                    marginRight: 8
                                }}
                                resizeMode='contain'
                            />

                            <Text>Perempuan</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Tanggal Lahir</Text>

                    <Pressable onPress={toggleDatepicker}>
                        <TextInput
                            placeholder={dobLabel}
                            value={DateofBirth}
                            onChangeText={setDateofBirth}
                            onPressIn={toggleDatepicker}
                            editable={false}
                            placeholderTextColor={COLORS.black}
                            style={{width: "100%",
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22, paddingTop:1 }}
                        />
                    </Pressable>

                    {showPIcker &&(
                        <DateTimePicker
                        mode="date"
                        display="spinner"
                        value={date}
                        onChange={onChange}
                        />
                    )}

                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={(value) => {
                            setIsChecked(value);
                            setIsButtonDisabled(!value); // Mengaktifkan tombol jika Checkbox di centang
                        }}
                        color={isChecked ? COLORS.primary : undefined}
                    />
                    <Text>I agree to the terms and conditions</Text>
                </View>

                <TouchableOpacity
                //onPress={() => console.log(DateofBirth)}
                    disabled={isButtonDisabled}
                            style={{
                                paddingBottom: 16,
                                paddingVertical: 10,
                                borderColor: COLORS.primary,
                                borderWidth: 2,
                                borderRadius: 12,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: isButtonDisabled ? COLORS.pWhite : COLORS.button
                            }}
                        >
                            <Text style={{color: isButtonDisabled ?  COLORS.black : COLORS.white}}>Sign Up</Text>
                        </TouchableOpacity>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup