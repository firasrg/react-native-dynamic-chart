import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

const UserDataScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#8C38A9', justifyContent: "space-around"}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                User Data
            </Text>

            <View style={{ flex:1, alignItems: 'stretch', marginHorizontal: 10,marginTop: 15 }}>
                <Text style={{ color: 'white' }}>RPE: 15</Text>
                <View style={{  flexDirection: "row", justifyContent: "space-between", marginTop: 15}}>
                    <Text style={{ color: 'white'}}>WATT: 100</Text>
                    <TouchableOpacity style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}>
                        <Text style={{ color: '#8C38A9', fontWeight: 'bold', textAlign: 'center' }}>
                            HRV graph
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                    marginHorizontal: 10
                }}
            >
                <TouchableOpacity style={{ padding: 8,justifyContent:"center",flex: 1, marginRight: 8, backgroundColor: 'white', borderRadius: 8 }}>
                    <Text style={{ color: '#8C38A9', fontWeight: 'bold', textAlign: 'center' }}>
                        Exertion
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 8,justifyContent:"center",flex: 1, marginRight: 8, backgroundColor: 'white', borderRadius: 8 }}>
                    <Text style={{ color: '#8C38A9', fontWeight: 'bold', textAlign: 'center' }}>
                        START TIMER
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 8,justifyContent:"center",flex: 1, backgroundColor: 'white', borderRadius: 8 }}>
                    <Text style={{ color: '#8C38A9', fontWeight: 'bold', textAlign: 'center' }}>
                        SAVE DATA
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 16, paddingVertical: 100 }}>
                {/* Content for the white box */}
            </View>

            <TouchableOpacity style={{ justifyContent:"center", flexDirection: 'row', alignItems: 'center', paddingVertical:15 }}>
                {/* Icon or any other content for the Disconnect button */}
                <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 8 }}>
                    Disconnect
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default UserDataScreen;
