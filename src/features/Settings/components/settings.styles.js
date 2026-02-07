import { List, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Camera } from "expo-camera";

export const ListSection = styled(List.Section)`
  margin-top: 10px;
  margin-left: 20px;
`;

export const Caption = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: grey;
`;
export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
export const StyledList = styled.View`
  background-color: white;
  width: 100%;
  flex: 5;
  padding: 16px;
`;

export const AvatarContainer = styled.View`
  margin-top: 60px;
  align-items: center;
`;

export const StyledAvatarIcon = styled(Avatar.Text)`
  background-color: #2182bd;
  margin-bottom: 10px;
`;

export const StyledAvatarImage = styled(Avatar.Image)`
  margin-bottom: 10px;
`;
export const Email = styled.Text`
  font-weight: bold;
`;

export const CameraFlipButton = styled(TouchableOpacity)`
  position: absolute;
  right: 20px;
  bottom: 10px;
`;

export const CameraView = styled.View`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 10px;
`;
export const CameraClick = styled(TouchableOpacity)`
  position; absolute;
  left: 155px;
`;

export const StylesCamera = styled(Camera)`
  flex: 1;
`;
