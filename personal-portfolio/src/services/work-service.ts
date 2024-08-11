import { NamedService } from "./abstract/named-service";
import jobHistoryData from "@data/jobhistory.json";
import { ref } from "vue";
import { WorkExperience } from "../models/WorkExperience";

export class WorkService implements NamedService {
  public static serviceName = "WorkService";
  public serviceName = WorkService.serviceName;

  constructor() {
    this.import_files();
  }

  private _workExperiences = ref<WorkExperience[]>([]);
  private _selectedWorkExperience = ref<number>(0);

  public get workExperiences(): WorkExperience[] {
    return this._workExperiences.value;
  }

  public set workExperiences(workExperiences: WorkExperience[]) {
    this._workExperiences.value = workExperiences;
  }

  public get selectedWorkExperienceId(): number {
    return this._selectedWorkExperience.value;
  }

  public set selectedWorkExperienceId(workExperienceId: number) {
    this._selectedWorkExperience.value = workExperienceId;
  }

  private import_files() {
    this.workExperiences = jobHistoryData as WorkExperience[];
    this.workExperiences.sort((wE) => wE.startYear + wE.startMonthNumber);
  }

  public getCompanies(): string[] {
    console.log(this.workExperiences);
    return this.workExperiences.map((wE) => wE.company);
  }

  public getSelectedWorkExperience(): WorkExperience {
    return this.workExperiences[this.selectedWorkExperienceId];
  }
}
