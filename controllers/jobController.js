import JobModel from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllJobs = async (req, res) => {
  console.log(req.user);
  const jobs = await JobModel.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  const job = await JobModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findById(id);

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: "job modified", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: "job deleted" });
};
